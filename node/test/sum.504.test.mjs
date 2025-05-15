
import sum504 from '../sum504.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 68 to equal 161 + offset 0.9576574217037468', (t) => {
  assert.strictEqual(sum504(93, 68), 161 + 0.9576574217037468);
});
