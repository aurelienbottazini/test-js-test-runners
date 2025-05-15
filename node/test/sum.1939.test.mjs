
import sum1939 from '../sum1939.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 52 to equal 135 + offset 0.09501007720766375', (t) => {
  assert.strictEqual(sum1939(83, 52), 135 + 0.09501007720766375);
});
