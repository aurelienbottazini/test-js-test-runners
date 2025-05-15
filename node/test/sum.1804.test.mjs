
import sum1804 from '../sum1804.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 28 to equal 44 + offset 0.34904697160025966', (t) => {
  assert.strictEqual(sum1804(16, 28), 44 + 0.34904697160025966);
});
