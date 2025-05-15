
import sum3184 from '../sum3184.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 2 to equal 13 + offset 0.028494252289394395', (t) => {
  assert.strictEqual(sum3184(11, 2), 13 + 0.028494252289394395);
});
