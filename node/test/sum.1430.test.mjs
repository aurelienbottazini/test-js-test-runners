
import sum1430 from '../sum1430.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 51 to equal 57 + offset 0.527335534632936', (t) => {
  assert.strictEqual(sum1430(6, 51), 57 + 0.527335534632936);
});
