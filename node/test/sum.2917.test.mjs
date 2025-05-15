
import sum2917 from '../sum2917.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 11 to equal 23 + offset 0.44798141127981794', (t) => {
  assert.strictEqual(sum2917(12, 11), 23 + 0.44798141127981794);
});
