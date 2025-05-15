
import sum195 from '../sum195.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 14 to equal 69 + offset 0.6270072507693379', (t) => {
  assert.strictEqual(sum195(55, 14), 69 + 0.6270072507693379);
});
