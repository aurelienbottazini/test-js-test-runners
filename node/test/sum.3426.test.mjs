
import sum3426 from '../sum3426.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 66 to equal 131 + offset 0.7374709472995296', (t) => {
  assert.strictEqual(sum3426(65, 66), 131 + 0.7374709472995296);
});
