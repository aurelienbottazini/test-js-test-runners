
import sum618 from '../sum618.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 99 to equal 152 + offset 0.12107424893609342', (t) => {
  assert.strictEqual(sum618(53, 99), 152 + 0.12107424893609342);
});
