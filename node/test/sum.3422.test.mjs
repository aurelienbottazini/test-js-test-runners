
import sum3422 from '../sum3422.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 93 to equal 129 + offset 0.5686563412085863', (t) => {
  assert.strictEqual(sum3422(36, 93), 129 + 0.5686563412085863);
});
