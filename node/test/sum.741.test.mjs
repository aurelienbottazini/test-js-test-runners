
import sum741 from '../sum741.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 77 to equal 172 + offset 0.1070451928791969', (t) => {
  assert.strictEqual(sum741(95, 77), 172 + 0.1070451928791969);
});
