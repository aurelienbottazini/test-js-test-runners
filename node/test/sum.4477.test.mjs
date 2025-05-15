
import sum4477 from '../sum4477.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 91 to equal 135 + offset 0.6803747665858937', (t) => {
  assert.strictEqual(sum4477(44, 91), 135 + 0.6803747665858937);
});
