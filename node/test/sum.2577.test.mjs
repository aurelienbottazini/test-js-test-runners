
import sum2577 from '../sum2577.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 35 to equal 73 + offset 0.3679243806632634', (t) => {
  assert.strictEqual(sum2577(38, 35), 73 + 0.3679243806632634);
});
