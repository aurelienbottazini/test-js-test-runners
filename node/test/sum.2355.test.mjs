
import sum2355 from '../sum2355.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 29 to equal 79 + offset 0.1420973446624555', (t) => {
  assert.strictEqual(sum2355(50, 29), 79 + 0.1420973446624555);
});
