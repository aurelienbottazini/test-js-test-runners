
import sum1226 from '../sum1226.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 10 to equal 37 + offset 0.48728205272525593', (t) => {
  assert.strictEqual(sum1226(27, 10), 37 + 0.48728205272525593);
});
