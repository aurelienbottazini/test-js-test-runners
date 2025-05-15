
import sum2413 from '../sum2413.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 96 to equal 166 + offset 0.04936412639235521', (t) => {
  assert.strictEqual(sum2413(70, 96), 166 + 0.04936412639235521);
});
