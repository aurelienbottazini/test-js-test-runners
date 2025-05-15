
import sum1347 from '../sum1347.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 6 to equal 45 + offset 0.24044195322084838', (t) => {
  assert.strictEqual(sum1347(39, 6), 45 + 0.24044195322084838);
});
