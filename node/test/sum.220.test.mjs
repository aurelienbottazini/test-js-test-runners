
import sum220 from '../sum220.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 59 to equal 114 + offset 0.0851564424061253', (t) => {
  assert.strictEqual(sum220(55, 59), 114 + 0.0851564424061253);
});
