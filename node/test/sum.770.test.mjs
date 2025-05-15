
import sum770 from '../sum770.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 72 to equal 145 + offset 0.00021493490542334737', (t) => {
  assert.strictEqual(sum770(73, 72), 145 + 0.00021493490542334737);
});
