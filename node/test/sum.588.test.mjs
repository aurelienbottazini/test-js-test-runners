
import sum588 from '../sum588.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 47 to equal 65 + offset 0.6681026213343066', (t) => {
  assert.strictEqual(sum588(18, 47), 65 + 0.6681026213343066);
});
