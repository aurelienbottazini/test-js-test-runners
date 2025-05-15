
import sum3186 from '../sum3186.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 50 to equal 104 + offset 0.07758690107828581', (t) => {
  assert.strictEqual(sum3186(54, 50), 104 + 0.07758690107828581);
});
