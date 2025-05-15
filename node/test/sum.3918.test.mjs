
import sum3918 from '../sum3918.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 71 to equal 97 + offset 0.033482787393256386', (t) => {
  assert.strictEqual(sum3918(26, 71), 97 + 0.033482787393256386);
});
