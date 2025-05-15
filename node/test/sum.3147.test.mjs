
import sum3147 from '../sum3147.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 61 to equal 131 + offset 0.12961948453718453', (t) => {
  assert.strictEqual(sum3147(70, 61), 131 + 0.12961948453718453);
});
