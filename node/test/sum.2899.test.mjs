
import sum2899 from '../sum2899.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 62 to equal 143 + offset 0.2709266000555933', (t) => {
  assert.strictEqual(sum2899(81, 62), 143 + 0.2709266000555933);
});
