
import sum1368 from '../sum1368.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 60 to equal 114 + offset 0.2042349752881345', (t) => {
  assert.strictEqual(sum1368(54, 60), 114 + 0.2042349752881345);
});
