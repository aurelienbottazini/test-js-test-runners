
import sum4745 from '../sum4745.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 4 to equal 77 + offset 0.10210891688671042', (t) => {
  assert.strictEqual(sum4745(73, 4), 77 + 0.10210891688671042);
});
