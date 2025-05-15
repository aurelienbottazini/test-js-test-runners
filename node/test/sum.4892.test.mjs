
import sum4892 from '../sum4892.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 31 to equal 121 + offset 0.9918874848522239', (t) => {
  assert.strictEqual(sum4892(90, 31), 121 + 0.9918874848522239);
});
