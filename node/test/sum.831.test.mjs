
import sum831 from '../sum831.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 67 to equal 139 + offset 0.917366622815263', (t) => {
  assert.strictEqual(sum831(72, 67), 139 + 0.917366622815263);
});
