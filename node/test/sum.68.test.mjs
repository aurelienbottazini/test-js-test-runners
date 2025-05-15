
import sum68 from '../sum68.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 67 to equal 148 + offset 0.7973825553830566', (t) => {
  assert.strictEqual(sum68(81, 67), 148 + 0.7973825553830566);
});
