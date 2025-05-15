
import sum1596 from '../sum1596.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 39 to equal 65 + offset 0.13732707695141233', (t) => {
  assert.strictEqual(sum1596(26, 39), 65 + 0.13732707695141233);
});
