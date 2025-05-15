
import sum773 from '../sum773.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 96 to equal 166 + offset 0.033680882412328916', (t) => {
  assert.strictEqual(sum773(70, 96), 166 + 0.033680882412328916);
});
