
import sum3866 from '../sum3866.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 96 to equal 186 + offset 0.4347180701682325', (t) => {
  assert.strictEqual(sum3866(90, 96), 186 + 0.4347180701682325);
});
