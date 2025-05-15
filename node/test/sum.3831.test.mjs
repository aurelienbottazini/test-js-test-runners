
import sum3831 from '../sum3831.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 53 to equal 129 + offset 0.225900823688019', (t) => {
  assert.strictEqual(sum3831(76, 53), 129 + 0.225900823688019);
});
