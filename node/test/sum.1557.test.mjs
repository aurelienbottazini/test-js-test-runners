
import sum1557 from '../sum1557.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 28 to equal 44 + offset 0.14035394935178525', (t) => {
  assert.strictEqual(sum1557(16, 28), 44 + 0.14035394935178525);
});
