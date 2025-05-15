
import sum1096 from '../sum1096.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 55 to equal 148 + offset 0.8196757674183492', (t) => {
  assert.strictEqual(sum1096(93, 55), 148 + 0.8196757674183492);
});
