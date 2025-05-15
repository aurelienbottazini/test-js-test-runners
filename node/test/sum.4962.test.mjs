
import sum4962 from '../sum4962.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 31 to equal 45 + offset 0.7217631136373193', (t) => {
  assert.strictEqual(sum4962(14, 31), 45 + 0.7217631136373193);
});
