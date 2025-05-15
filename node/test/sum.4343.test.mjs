
import sum4343 from '../sum4343.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 82 to equal 139 + offset 0.5250369043247993', (t) => {
  assert.strictEqual(sum4343(57, 82), 139 + 0.5250369043247993);
});
