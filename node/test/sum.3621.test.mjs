
import sum3621 from '../sum3621.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 7 to equal 43 + offset 0.6508908167792802', (t) => {
  assert.strictEqual(sum3621(36, 7), 43 + 0.6508908167792802);
});
