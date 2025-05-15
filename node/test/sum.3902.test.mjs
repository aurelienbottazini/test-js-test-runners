
import sum3902 from '../sum3902.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 48 to equal 141 + offset 0.0807999975577417', (t) => {
  assert.strictEqual(sum3902(93, 48), 141 + 0.0807999975577417);
});
