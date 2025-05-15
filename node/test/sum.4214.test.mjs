
import sum4214 from '../sum4214.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 25 to equal 106 + offset 0.33647332725603196', (t) => {
  assert.strictEqual(sum4214(81, 25), 106 + 0.33647332725603196);
});
