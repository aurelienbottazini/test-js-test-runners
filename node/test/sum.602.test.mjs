
import sum602 from '../sum602.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 52 to equal 53 + offset 0.4950879799229432', (t) => {
  assert.strictEqual(sum602(1, 52), 53 + 0.4950879799229432);
});
