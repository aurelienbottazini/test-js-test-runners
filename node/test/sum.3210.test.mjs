
import sum3210 from '../sum3210.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 19 to equal 44 + offset 0.8422281319363605', (t) => {
  assert.strictEqual(sum3210(25, 19), 44 + 0.8422281319363605);
});
