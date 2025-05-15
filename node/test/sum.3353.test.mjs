
import sum3353 from '../sum3353.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 16 to equal 67 + offset 0.14894432446659844', (t) => {
  assert.strictEqual(sum3353(51, 16), 67 + 0.14894432446659844);
});
