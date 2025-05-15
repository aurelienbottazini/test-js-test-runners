
import sum3727 from '../sum3727.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 24 to equal 93 + offset 0.7189460057364959', (t) => {
  assert.strictEqual(sum3727(69, 24), 93 + 0.7189460057364959);
});
